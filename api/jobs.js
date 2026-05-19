export default async function handler(req, res) {

    const query = req.query.q;

    try {

        const response = await fetch(

            `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1`,

            {
                method: 'GET',

                headers: {
                    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                }
            }

        );

        const data = await response.json();

        res.status(200).json(data);

    } catch(error){

        res.status(500).json({
            error: error.message
        });

    }

}
