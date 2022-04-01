import db from '../../../../services/db';
import type {NextApiRequest, NextApiResponse} from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const topics = await db.collection('topics').orderBy('created').get();
    const topicsData = topics.topics.map(topic => ({
      id: topic.id,
      ...topic.data()
    }));

    res.status(200).json({topicsData});
  } catch (evt) {
    res.status(400).end();
  }
}
