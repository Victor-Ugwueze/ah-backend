// actionType
import {
  FOLLOW_ACTION,
  FOLLOW__ACTION_SUCCESS,
  FOLLOW_ACTION_FAILURE,
  GET_FOLLOWERS,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWING,
  GET_FOLLOWING_SUCCESS,
  GET_FOLLOWING_FAILURE
}
  from '../../../actionTypes/follow';

// reducer
import follow from '../follow';

describe('Follow reducer', () => {
  it('should run on user follow request', () => {
    expect(
      follow([], {
        type: FOLLOW_ACTION,
        payload: {
          progress: 'ongoing'
        }
      })
    ).toEqual(
      {
        followAction: undefined,
        isFollowing: undefined,
        progress: 'ongoing'
      }
    );
  });

  it('should run on user follow success', () => {
    expect(
      follow([], {
        type: FOLLOW__ACTION_SUCCESS,
        payload: {
          progress: 'done',
        }
      })
    ).toEqual(
      {
        isFollowing: undefined,
        progress: 'done'
      }
    );
  });

  it('should run on user follow failure', () => {
    expect(
      follow([], {
        type: FOLLOW_ACTION_FAILURE,
        payload: {
          message: 'failed to get notification'
        }
      })
    ).toEqual(
      {
        isFollowing: undefined,
        progress: undefined
      }
    );
  });

  it('should run on list user followers request', () => {
    expect(
      follow([], {
        type: GET_FOLLOWERS,
        payload: {
          progress: 'ongoing'
        }
      })
    ).toEqual(
      {
        followAction: undefined,
        isFollowing: undefined,
        progress: 'ongoing'
      }
    );
  });

  it('should run on list user followers success', () => {
    expect(
      follow([], {
        type: GET_FOLLOWERS_SUCCESS,
        payload: {
          progress: 'done',
        }
      })
    ).toEqual(
      {
        isFollowing: undefined,
        progress: 'done'
      }
    );
  });

  it('should run on list user following failure', () => {
    expect(
      follow([], {
        type: GET_FOLLOWERS_FAILURE
      })
    ).toEqual(
      {
        isFollowing: undefined,
        progress: undefined
      }
    );
  });

  it('should run on list user following request', () => {
    expect(
      follow([], {
        type: GET_FOLLOWING,
        payload: {
          progress: 'ongoing'
        }
      })
    ).toEqual(
      {
        followAction: undefined,
        isFollowing: undefined,
        progress: 'ongoing'
      }
    );
  });

  it('should run on list user following success', () => {
    expect(
      follow([], {
        type: GET_FOLLOWING_SUCCESS,
        payload: {
          progress: 'done',
          following: []
        }
      })
    ).toEqual(
      {
        following: [],
        progress: 'done'
      }
    );
  });

  it('should run on list user followers failure', () => {
    expect(
      follow([], {
        type: GET_FOLLOWING_FAILURE,
        payload: {
          progress: 'done',
        }
      })
    ).toEqual(
      {
        progress: 'done'
      }
    );
  });
});
