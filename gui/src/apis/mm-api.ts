
import processed_map_data from './fake_data/ProcessedMap.json';
import all_spat_data from './fake_data/ProcessedSpat.ts';
// import processed_spat_data from './fake_data/ProcessedSpatSingle.json';
// import bsm_data from './fake_data/BsmSingle.json';
import all_bsm_data from './fake_data/10.11.81.12_BSMlist.ts';

class MessageMonitorApi {
    getMapMessage(): ProcessedMap {
        return processed_map_data;
    }

    getSpatMessages(): ProcessedSpat[] {
        const data: string = all_spat_data;
        const spatData: ProcessedSpat[] = data.split('\n').map(line => JSON.parse(line));
        return spatData;
    }

    getBsmMessages(): OdeBsmData[]
    {
        const data: string = all_bsm_data;
        const bsmData: OdeBsmData[] = data.split('\n').map(line => JSON.parse(line));
        return bsmData;
    }
}

export default new MessageMonitorApi();