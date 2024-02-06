import { AppState } from "../AppState.js";

class ChangeService {
    addChange() {
        AppState.Change++
        console.log('adding change');
    }
}

export const changeService = new ChangeService()