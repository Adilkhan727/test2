import { useEffect } from 'react';
import { motion } from 'framer-motion';

const crmFormId = '234f09f7-c1b3-4154-8632-ba3fa6134f0d';
const crmContainerId = `crm-lead-form-${crmFormId}`;
const crmProxyEndpoint = '/api/crm-form';

function injectLeadForm() {
  const c = document.getElementById(crmContainerId);
  if (!c) return;

  c.innerHTML = '<p style="text-align:center;color:#888;padding:24px;">Загрузка формы...</p>';

  fetch(crmProxyEndpoint)
    .then((r) => {
      if (!r.ok) throw new Error('Fetch error');
      return r.json();
    })
    .then((cfg) => {
      const s = cfg.styling;
      const f = cfg.form_fields || [];
      let h = `<div style="max-width:${s.formMaxWidth};width:${s.formWidth};padding:${s.formPadding};border-radius:${s.formBorderRadius};background:${s.formBackgroundColor};box-shadow:${s.formShadow};font-family:${s.fontFamily};margin:0 auto;box-sizing:border-box;">`;
      h += `<h2 style="color:${s.titleColor};font-size:${s.titleFontSize};font-weight:${s.titleFontWeight};margin:0 0 ${s.titleMarginBottom} 0;text-align:${s.titleTextAlign};">${cfg.form_title}</h2>`;
      h += `<form id="crm-f-${crmFormId}">`;
      f.forEach(function (fld: any) {
        h += `<div style="margin-bottom:${s.inputMarginBottom};">`;
        h += `<label style="display:block;color:${s.labelColor};font-size:${s.labelFontSize};font-weight:${s.labelFontWeight};margin-bottom:${s.labelMarginBottom};">${fld.label}${fld.required ? ' <span style="color:' + s.errorColor + '">*</span>' : ''}</label>`;
        const ist = `width:100%;box-sizing:border-box;background:${s.inputBackgroundColor};border:1px solid ${s.inputBorderColor};border-radius:${s.inputBorderRadius};padding:${s.inputPadding};font-size:${s.inputFontSize};color:${s.inputTextColor};font-family:inherit;outline:none;`;
        const isPhone = fld.type === 'tel' || (fld.fieldType === 'standard' && fld.standardField === 'phone');
        if (fld.type === 'textarea') {
          h += `<textarea name="${fld.name}" placeholder="${fld.placeholder || ''}"${fld.required ? ' required' : ''} style="${ist}min-height:100px;resize:vertical;"></textarea>`;
        } else if (fld.type === 'select' && fld.options) {
          h += `<select name="${fld.name}"${fld.required ? ' required' : ''} style="${ist}">`;
          h += `<option value="">${fld.placeholder || 'Выберите...'}</option>`;
          fld.options.forEach(function (o: any) {
            h += `<option value="${o.value}">${o.label}</option>`;
          });
          h += '</select>';
        } else {
          h += `<input type="${fld.type || 'text'}" name="${fld.name}" placeholder="${fld.placeholder || ''}"${fld.required ? ' required' : ''} style="${ist}"${isPhone ? ' data-phone-mask="true"' : ''}>`;
        }
        h += '</div>';
      });
      if (cfg.honeypot_field) {
        h += `<input type="text" name="${cfg.honeypot_field}" style="display:none;" tabindex="-1" autocomplete="off">`;
      }
      h += `<div style="margin-top:${s.inputMarginBottom};margin-bottom:${s.inputMarginBottom};">`;
      h += `<label style="display:flex;align-items:flex-start;gap:8px;cursor:pointer;font-size:${s.labelFontSize};color:${s.labelColor};line-height:1.4;">`;
      h += `<input type="checkbox" id="crm-consent-${crmFormId}" required style="margin-top:3px;flex-shrink:0;width:16px;height:16px;cursor:pointer;">`;
      h += `<span>Даю согласие на сбор и обработку персональных данных в соответствии с <a href="https://adilet.zan.kz/rus/docs/Z1300000094" target="_blank" rel="noopener noreferrer" style="color:${s.buttonBackgroundColor};text-decoration:underline;">законом</a> РК</span>`;
      h += '</label>';
      h += '</div>';
      h += `<button type="submit" id="crm-btn-${crmFormId}" style="background:${s.buttonBackgroundColor};color:${s.buttonTextColor};font-size:${s.buttonFontSize};font-weight:${s.buttonFontWeight};padding:${s.buttonPadding};border-radius:${s.buttonBorderRadius};width:${s.buttonWidth};margin-top:${s.buttonMarginTop};border:none;cursor:pointer;font-family:inherit;">${cfg.submit_button_text}</button>`;
      h += '</form>';
      h += `<div id="crm-ok-${crmFormId}" style="display:none;background:${s.successBackgroundColor};color:${s.successTextColor};border-radius:${s.successBorderRadius};padding:${s.successPadding};text-align:center;">${cfg.success_message}</div>`;
      h += '</div>';
      c.innerHTML = h;

      const form = document.getElementById(`crm-f-${crmFormId}`) as HTMLFormElement | null;
      const btn = document.getElementById(`crm-btn-${crmFormId}`) as HTMLButtonElement | null;
      const consent = document.getElementById(`crm-consent-${crmFormId}`) as HTMLInputElement | null;

      const phoneInputs = Array.from(document.querySelectorAll(`#crm-f-${crmFormId} input[data-phone-mask="true"]`)) as HTMLInputElement[];
      phoneInputs.forEach(function (input) {
        function formatPhone(value: string) {
          let digits = value.replace(/\D/g, '');
          if (digits.length === 0) return '';
          if (digits[0] === '8') {
            digits = '7' + digits.substring(1);
          }
          if (digits[0] === '7' || digits[0] === '+') {
            if (digits[0] === '+') digits = digits.substring(1);
            if (digits[0] !== '7') digits = '7' + digits;
          } else {
            digits = '7' + digits;
          }
          if (digits.length > 11) digits = digits.substring(0, 11);
          if (digits.length === 1) return '+7';
          if (digits.length <= 4) return '+7 ' + digits.substring(1);
          if (digits.length <= 7) return '+7 ' + digits.substring(1, 4) + ' ' + digits.substring(4);
          if (digits.length <= 9) return '+7 ' + digits.substring(1, 4) + ' ' + digits.substring(4, 7) + ' ' + digits.substring(7);
          return '+7 ' + digits.substring(1, 4) + ' ' + digits.substring(4, 7) + ' ' + digits.substring(7, 9) + ' ' + digits.substring(9);
        }
        input.addEventListener('input', function (e) {
          const target = e.target as HTMLInputElement;
          const val = target.value;
          const pos = target.selectionStart ?? val.length;
          const formatted = formatPhone(val);
          target.value = formatted;
          const newPos = Math.min(pos + formatted.length - val.length, formatted.length);
          target.setSelectionRange(newPos, newPos);
        });
        input.addEventListener('keydown', function (e) {
          if (e.key === 'Backspace' && input.selectionStart !== null && input.selectionStart <= 3) {
            e.preventDefault();
            input.value = '';
          }
        });
        input.addEventListener('paste', function (e) {
          e.preventDefault();
          const pasted = e.clipboardData?.getData('text') || '';
          input.value = formatPhone(pasted);
        });
      });

      form?.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!consent?.checked) {
          alert('Необходимо дать согласие на обработку персональных данных');
          return;
        }
        if (!btn) return;
        const originalText = btn.textContent;
        btn.textContent = 'Отправка...';
        btn.disabled = true;
        const formData = new FormData(form);
        const data: Record<string, FormDataEntryValue> = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
        fetch(crmProxyEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((r) => {
            if (!r.ok) return r.json().then((err) => Promise.reject(err));
            return r.json();
          })
          .then((res) => {
            if (form) form.style.display = 'none';
            const ok = document.getElementById(`crm-ok-${crmFormId}`);
            if (ok) {
              ok.textContent = res.message || ok.textContent;
              ok.style.display = 'block';
            }
            if (res.redirect_url) {
              setTimeout(() => {
                window.location.href = res.redirect_url;
              }, 2000);
            }
          })
          .catch((err) => {
            console.error(err);
            const msg = err?.error || err?.detail || 'Ошибка отправки';
            alert(msg);
            if (btn) {
              btn.textContent = originalText;
              btn.disabled = false;
            }
          });
      });
    })
    .catch((e) => {
      console.error(e);
      const c = document.getElementById(crmContainerId);
      if (c) {
        c.innerHTML = '<p style="color:#dc2626;text-align:center;padding:20px;">Ошибка загрузки формы</p>';
      }
    });
}

export default function LeadFormSection() {
  useEffect(() => {
    injectLeadForm();
  }, []);

  return (
    <section id="lead-form" className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-soft sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-brand/90">Оставьте заявку</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Заполните форму и получите бесплатный анализ уровня</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Получите персональную стратегию подготовки по IELTS и общему английскому.
          </p>
          <div className="mt-8 space-y-4 rounded-[28px] bg-brand/5 p-6 text-slate-700">
            <p className="font-semibold text-slate-950">Что вы получите:</p>
            <ul className="space-y-2 text-sm leading-6">
              <li>• Персональную стратегию подготовки</li>
              <li>• Оценку текущего уровня</li>
              <li>• Рекомендации по учебному плану</li>
            </ul>
          </div>
        </div>
        <div className="rounded-[32px] bg-slate-50 p-6 shadow-sm min-h-[420px]">
          <div id={crmContainerId}></div>
        </div>
      </motion.div>
    </section>
  );
}
