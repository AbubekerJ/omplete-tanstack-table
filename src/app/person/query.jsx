import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';





export const useGetAllPerson = () => {
  return useQuery({
    queryKey: ['person'],
    queryFn: async () => {
      const { data } = await axios.get('https://6707a0b78e86a8d9e42c3ae6.mockapi.io/api/v1/users');
      return data; 
    }, 
  });
};



export const useDeletePerson = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (personId) => {
      console.log(`Attempting to delete person with ID: ${personId}`);
      await axios.delete(`https://6707a0b78e86a8d9e42c3ae6.mockapi.io/api/v1/users/${personId}`);
      return personId; 
    },
   
  });
};


