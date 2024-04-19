
/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

// The ID of your GCS file
// const fileName = 'your-file-name';

// The filename and file path where you want to download the file
// const destFileName = '/local/path/to/file.txt';

// Imports the Google Cloud client library
//https://cloud.google.com/storage/docs/samples/storage-stream-file-download#storage_stream_file_download-nodejs
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

async function streamFileDownload() {
  // The example below demonstrates how we can reference a remote file, then
  // pipe its contents to a local file.
  // Once the stream is created, the data can be piped anywhere (process, sdout, etc)
  await storage
    .bucket(bucketName)
    .file(fileName)
    .createReadStream() //stream is created
    .pipe(fs.createWriteStream(destFileName))
    .on('finish', () => {
      // The file download is complete
    });

  console.log(
    `gs://${bucketName}/${fileName} downloaded to ${destFileName}.`
  );
}

streamFileDownload().catch(console.error);
