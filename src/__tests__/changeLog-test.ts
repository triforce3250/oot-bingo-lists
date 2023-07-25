import { getChangeLog } from '../changeLog'
import { getBingoList } from '../index'
import { v10_3_option_3 } from '../lists/v10_3_option_3';
import { v10_3_option_4 } from '../lists/v10_3_option_4';

describe('changeLog', () => {

    it('works', () => {
        const logs = getChangeLog(getBingoList('v10.2').normal, v10_3_option_4.normal);

        console.log(logs.join('\n'));
    })

})