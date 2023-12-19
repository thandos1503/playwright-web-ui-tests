class DataHelper {

    userObjectList() {
        var object = 
        [
            { TestFeature: 'User1', userName: 'Thandos1311@outlook.com', Password: 'Abc123##' },
            { TestFeature: 'User2', userName: 'thandos1503@gmail.com', Password: 'Abc123##' }
        ]
        return object;
    }
}

export const dataHelper = new DataHelper();