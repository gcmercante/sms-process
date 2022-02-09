import { GetMessageDataRepositoryMock } from './mocks';
import { GetMessageVariablesService } from '../services/GetMessageVariables.service';

type SutOutput = {
  sut: GetMessageVariablesService;
  getMessageDataRepository: GetMessageDataRepositoryMock;
};

const makeSutGetVariables = (): SutOutput => {
  const getMessageDataRepository = new GetMessageDataRepositoryMock();
  const sut = new GetMessageVariablesService(getMessageDataRepository);

  return { sut, getMessageDataRepository };
};

describe('GetMessageVariablesService', () => {
  it('should return a valid object', async () => {
    const { sut, getMessageDataRepository } = makeSutGetVariables();
    await getMessageDataRepository.mockData();

    const variables = await sut.execute();

    expect(variables).toBeInstanceOf(Object);
  });
});
