export const setupFetchStub = (data) => {
    // eslint-disable-next-line no-unused-vars
    return function fetchStub(_url) {
        return new Promise((resolve) => {
            resolve({
                json: () => Promise.resolve(data),
            });
        });
    };
};

export const initFetchMocks = (stubs = []) => {
    global.fetch = jest.fn(setupFetchStub(stubs[0]));
    stubs.forEach((stub) => {
        global.fetch.mockImplementationOnce(setupFetchStub(stub));
    });
};

export const clearFetchMock = () => {
    global.fetch.mockClear();
    delete global.fetch;
};
