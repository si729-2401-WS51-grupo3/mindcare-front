export class ScheduleEntity {
  id: number;
  psychologistId: number; // Actualizado de psychologist_id a psychologistId
  startedHour: number; // Actualizado de started_hour a startedHour
  finishedHour: number; // Actualizado de finished_hour a finishedHour
  constructor() {
    this.id = 0;
    this.psychologistId = 0; // Actualizado de psychologist_id a psychologistId
    this.startedHour = 0; // Actualizado de started_hour a startedHour
    this.finishedHour = 0; // Actualizado de finished_hour a finishedHour
  }
}
