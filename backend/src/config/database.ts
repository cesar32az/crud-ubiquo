import { connect, ConnectionOptions } from 'mongoose';
import { DB } from './dotenv';

const URI: string = `mongodb+srv://${DB.user}:${DB.password}@cluster0.e7cd7.mongodb.net/${DB.db_name}?retryWrites=true&w=majority`;

const options: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

(async () => {
  try {
    await connect(URI, options);
    console.log(`🟢 The database ${DB.db_name} is connected.`);
  } catch (error) {
    console.error(`🔴 Unable to connect to the database: ${error}.`);
  }
})();
