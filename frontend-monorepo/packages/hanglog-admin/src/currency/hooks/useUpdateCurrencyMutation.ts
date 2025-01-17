import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putCurrency } from '@/currency/api/putCurrency';

import type { ErrorResponseData } from '@api/interceptors';

import { useToast } from '../../common/hooks/useToast';

export const useUpdateCurrencyMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const updateCurrencyMutation = useMutation({
    mutationFn: putCurrency,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currency'] });
      createToast('환율 정보를 성공적으로 수정했습니다.', 'success');
    },
    onError: (error: ErrorResponseData) => {
      createToast('환율 정보 수정에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    },
  });

  return updateCurrencyMutation;
};
