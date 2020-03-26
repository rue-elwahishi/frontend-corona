import { FormGroup } from '@angular/forms';


class MediaReq {
    advice_id: Number; //which advice does the media belong to
    form: FormGroup; //the form including the data to be sent
    isNew: Boolean; //whether it's a new media or patching an existing one
}

export default MediaReq;