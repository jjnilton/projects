export default function handler(req, res) {
  res.status(200).json({ error: 'missing text', usage: '/api/:text', more_info: `https://${req.headers.host}/api-usage` })
}
