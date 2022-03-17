import db from '../../../../services/db';
import type {NextApiRequest, NextApiResponse} from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const tasks = await db.collection('tasks').orderBy('created').get();
    const tasksData = tasks.docs.map(task => ({
      id: task.id,
      ...task.data()
    }));

    res.status(200).json({tasksData});
  } catch (evt) {
    res.status(400).end();
  }
}
