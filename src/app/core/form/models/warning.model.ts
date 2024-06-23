export class WarningModel {
  constructor(
    public id: number,
    public time: string,
    public title: string,
    public endDate: Date,
    public startDate: Date,
    public description: string,
  ) { }
}
