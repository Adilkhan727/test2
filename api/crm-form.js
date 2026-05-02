const crmFormId = '234f09f7-c1b3-4154-8632-ba3fa6134f0d';
const crmEndpoint = `https://crm.tennet.kz/api/public/forms/${crmFormId}/`;

module.exports = async function handler(req, res) {
  const method = req.method || 'GET';
  const headers = {
    Accept: 'application/json',
    'User-Agent': 'UPgradeSchool-CRM-Proxy',
  };

  if (method === 'POST') {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const response = await fetch(crmEndpoint, {
      method,
      headers,
      body: method === 'POST' ? JSON.stringify(req.body) : undefined,
    });

    const body = await response.text();
    res.status(response.status);
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json');
    res.send(body);
  } catch (error) {
    res.status(502).json({ error: 'CRM proxy failed', detail: String(error) });
  }
};
