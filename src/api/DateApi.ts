import { useQuery } from "@tanstack/react-query";
import { Rooms } from "../types";

export const useGetRooms = (start: string, end: string) => {
  const getRoomsRequest = async (): Promise<Rooms> => {
    const response = await fetch(
      `https://api.bytebeds.com/api/v1/property/1/room/rate-calendar/assessment?start_date=${start}&end_date=${end}`
    );

    if (!response.ok) {
      throw new Error("Failed to get rooms");
    }

    return response.json();
  };

  const {
    data: rooms,
    error,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["fetchRooms", { start, end }],
    queryFn: getRoomsRequest,
    enabled: !!start && !!end,
  });

  return {
    rooms,
    isLoading,
    error,
    isSuccess,
  };
};
