import React, { createContext, useState, ReactNode, useContext } from 'react';

type ReservationData = {
  departure: string | null;
  return: string | null;
  passengers: string | null;
  baggage: string | null;
  boat: string | null;
  departureCity: string | null;
  returnCity: string | null;
};

type AppFormDataProps = {
  handleReservation: (reservationData: ReservationData) => void;
  reservation: ReservationData | null;
  numberOfSeatsSelected: string;
  handleSeatsSelected: (value: string) => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppFormDataProps>({} as AppFormDataProps);

function AppProvider({ children }: AppContextProviderProps) {
  const [reservation, setReservation] = useState<ReservationData | null>(null);
  const [numberOfSeatsSelected, setNumberOfSeatsSelected] = useState<string>('');

  const handleReservation = (reservationData: ReservationData) => {
    setReservation(reservationData);
  };

  function handleSeatsSelected(numberOfSeatsSelectedParams: string) {
    setNumberOfSeatsSelected(numberOfSeatsSelectedParams);
  }

  return (
    <AppContext.Provider
      value={{ handleReservation, reservation, handleSeatsSelected, numberOfSeatsSelected }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
