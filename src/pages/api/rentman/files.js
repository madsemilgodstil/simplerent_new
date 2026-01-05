export default async function handler (req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { id = '99' } = req.query

  try {
    const response = await fetch(`https://api.rentman.net/files/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RENTMAN_API_KEY}`
      }
    })

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch data' })
    }

    const data = await response.json()

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300')
    return res.status(200).json(data)
  } catch (error) {
    console.error('Rentman API error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
