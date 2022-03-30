import db from '../../../../services/db';
import type {NextApiRequest, NextApiResponse} from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const docs = await db.collection('docs').orderBy('created').get();
    const docsData = docs.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json({docsData});
  } catch (evt) {
    res.status(400).end();
  }
}
