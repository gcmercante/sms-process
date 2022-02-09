import { BuildMessageService } from '../services/BuildMessage.service';
import { GetMessageDataRepositoryMock } from './mocks';

type SutOutput = {
  sut: BuildMessageService;
  getMessageDataRepositoryMock: GetMessageDataRepositoryMock;
};

const makeSutBuildMessage = (): SutOutput => {
  const getMessageDataRepositoryMock = new GetMessageDataRepositoryMock();
  const sut = new BuildMessageService(getMessageDataRepositoryMock);
  return { sut, getMessageDataRepositoryMock };
};

describe('BuildMessageService', () => {
  it('should build a valid message object', async () => {
    const { sut, getMessageDataRepositoryMock } = makeSutBuildMessage();
    await getMessageDataRepositoryMock.mockData();
    const messageObj = await getMessageDataRepositoryMock.getMessageObj();

    const message = await sut.execute();

    expect(Object.keys(message)).toStrictEqual(Object.keys(messageObj));
  });
});
