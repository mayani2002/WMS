export const getUsersList = async () => {
    try {
        const res = await fetch('http://localhost:8000/users');
        if (res.status === 200) {
            const response = await res.json();
            return response;
        }
        
    } catch (error) {
        console.log('Error while calling getUsersList api', error);
    }
};


export const getPickUpRequests = async () => {
    try {
        const res = await fetch('http://localhost:8000/getAllPickUpRequests');
        if (res.status === 200) {
            const response = await res.json();
            return response;
        }
    } catch (error) {
        console.log('Error while calling getPickUpRequests API', error);
    }
}