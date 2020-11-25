
import mockAxios from '../mocks/mockAxios'
import meteorsArray from '../fixtures/meteorsArray'


    it('should call axios and return meteors data', async () => {
      // setup
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: meteorsArray
        })
      );

      const meteors = await mockAxios.get('/meteors');
      expect(meteors).toEqual(meteors);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
  

    })
   