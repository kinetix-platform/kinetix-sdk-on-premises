import axios from 'axios';
import axiosRetry from 'axios-retry';
import signRequest from './hmac.js';
const { KINETIX_BACKEND } = process.env;

class Kinetix {
    constructor() {
        axiosRetry(axios, {
            retryDelay: (retryCount) => {
                return retryCount * 1000;
            },
            retryCondition: (error) => {
                const codes = [502, 503, 504]
                return codes.includes(error.response.status);
            },
            retries: 5,
        });
    }
    async createAsset({ cognitoUuid, files = [], ...asset }) {
        const route = `${KINETIX_BACKEND}/api/v1/assets`;
        const body = { 
            ...asset,
            source: 'sdk',
            files,
            cognitoUuid 
        };
        const signature = signRequest(route, body, 'POST');
        const r = await axios.post(route, body, { headers: {
                'Content-Type': 'application/json',
                'Authorization': `hmac signature=${signature}`,
            }});
        return r.data;
    }
    
    async updateAsset({ uuid, data }) {
        const route = `${KINETIX_BACKEND}/api/v1/assets/${uuid}`;
        const body = {
            ...data,
        };
        const signature = signRequest(route, body, 'PUT');
        const r = await axios.put(route, body, { headers: {
                'Content-Type': 'application/json',
                'Authorization': `hmac signature=${signature}`,
            }});
        return r.data;
    }
    
    async createAssetFile(assetUuid, { name, extension }) {
        const route = `${KINETIX_BACKEND}/api/v1/assets/${assetUuid}/files`;
        const body = { name, extension };
        const signature = signRequest(route, body, 'POST');
        const response = await axios.post(route, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `hmac signature=${signature}`,
            }
        })
        return response.data
    }

    async getAsset(uuid) {
        const route = `${KINETIX_BACKEND}/api/v1/assets/${uuid}`;
        const signature = signRequest(route, null, 'GET');
        const r = await axios.get(route, { headers: {
                'Content-Type': 'application/json',
                'Authorization': `hmac signature=${signature}`,
            }});
        return r.data;
    }

    async deleteAsset(uuid) {
        const route = `${KINETIX_BACKEND}/api/v1/assets/${uuid}`;
        const signature = signRequest(route, null, 'DELETE');
        const r = await axios.delete(route, { headers: {
                'Content-Type': 'application/json',
                'Authorization': `hmac signature=${signature}`,
            }});
        return r.data;
    }

    async getAvatars(cognitoUuid) {
        const route = `${KINETIX_BACKEND}/api/v1/assets?type=avatar&noSignature=true`;
        const signature = signRequest(route, '', 'GET');
        const r = await axios.get(route, { headers: {
            'Content-Type': 'application/json',
            'Authorization': `hmac signature=${signature}`,
            'x-cognito-uuid': cognitoUuid
        }});

        const avatars = r?.data ? r.data.data.filter(({ metadata }) => ['Validated', 'Processed'].includes(metadata?.status)) : [];
        
        return avatars;
    }
}

export default new Kinetix();