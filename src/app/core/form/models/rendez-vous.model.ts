import {ClientModel} from "./client.model";
import {PrestationModel} from "../../../shared/model/prestation.model";
import {StatusType} from "../../../shared/types/status.type";

export class RendezVousModel {
  constructor(
    public id: number,
    public status: StatusType,
    public client: ClientModel,
    public appointmentBookingDate: Date,
    public prestation: PrestationModel[],
  ) { }
}
