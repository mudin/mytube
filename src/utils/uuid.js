/* for generating unique uuid v4 strings */
import { v4 as uuid } from 'uuid';

function genUuid() {
  return uuid();
}

export default genUuid;
