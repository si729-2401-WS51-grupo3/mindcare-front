import { ReservationEntity } from './reservation.entity';

describe('Reservation', () => {
  it('should create an instance', () => {
    expect(new ReservationEntity()).toBeTruthy();
  });
});
