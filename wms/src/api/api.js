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

export const getTrucksList = async () => {
    try {
        const res = await fetch('http://localhost:8000/getTrucksList');
        if (res.status === 200) {
            const response = await res.json();
            return response;
        }
    } catch (error) {
        console.log('Error while calling getTrucksList API', error);
    }
}

export const getPendingPickUpRequests = async () => {
    try {
        const res = await fetch('http://localhost:8000/getPendingPickUpRequests');
        if (res.status === 200) {
            const response = await res.json();
            return response;
        }
    } catch (error) {
        console.log('Error while calling getPendingPickUpRequests API', error);
    }
}

export const getIdleTrucks = async () => {
    try {
        const res = await fetch('http://localhost:8000/getIdleTrucks');
        if (res.status === 200) {
            const response = await res.json();
            return response;
        }
    } catch (error) {
        console.log('Error while calling getIdleTrucks API', error);
    }
}