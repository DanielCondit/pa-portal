export const servicesCSV = functions.firestore
    .document('reports/{reportId}')
    .onCreate((snap, context) => {

        // Step 1. Set main variables

        const reportId = context.params.reportId;
        const fileName = reports/${reportId}.csv;
        const tempFilePath = path.join(os.tmpdir(), fileName);
        const fields = ['date', 'fname', 'lname', 'grade', 'phone', 'emails', 'state', 'org', 'osymbol', 'support', 'desc'];
        const opts = { fields };
        
        // Reference report in Firestore
        const reportRef = db.collection('reports').doc(reportId)

        // Reference Storage Bucket
        const storage = gcs.bucket('pa-portal-188.appspot.com') // or set to env variable

        // Instanciamiento objeto tipo Parser
        const parser = new Parser(opts);

        // Step 2. Query collection 
        return db.collection('users')
                 .get() 
                 .then(querySnapshot => {
                    
                    /// Step 3. Creates CSV file from with orders collection
                    const users: any[] = []

                    // create array of users
                    querySnapshot.forEach(doc => {
                        doc
                        users.push( doc.data() )
                    });

                    
                    // return parser.parse({ data: users });
                    return parser.parse(users);
                 })
                .then(csv => {
                    // Step 4. Write the file to cloud function tmp storage
                    return fs.outputFile(tempFilePath, csv);
                })
                .then(() => {
                    // Step 5. Upload the file to Firebase cloud storage
                    return storage.upload(tempFilePath, { destination: fileName })
                })
                .then(file => {
                    // Step 6. Update status to complete in Firestore 

                    return reportRef.update({ status: 'complete' })
                })
                .catch(err => console.log(err) )

});