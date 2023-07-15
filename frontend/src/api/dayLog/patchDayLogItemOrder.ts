import { END_POINTS } from '@/constants/api';

import { axiosInstance } from '../axiosInstance';

export interface PatchDayLogItemOrderParams {
  tripId: number;
  dayLogId: number;
  itemIds: number[];
}

interface PatchDayLogOrderRequestBody {
  itemIds: number[];
}
export const patchDayLogItemOrder =
  () =>
  ({ tripId, dayLogId, itemIds }: PatchDayLogItemOrderParams) => {
    return axiosInstance.patch<PatchDayLogOrderRequestBody>(
      END_POINTS.DAY_LOG_ORDER(tripId, dayLogId),
      {
        itemIds,
      }
    );
  };
