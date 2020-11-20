import React, { useContext } from 'react';
import { login } from './utils';

import {Context} from './Store'

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export default function LoginUseContext() {
  const [state, dispatch] = useContext(Context);

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'login' });

    let username = state.draftUsername;
    let password = state.password;

    try {
      await login({ username, password }); // <<< HERE WE CONNECT UP TO THE API CALL IN util.js
      dispatch({ type: 'success' });
    } catch {
      dispatch({ type: 'error' });
    }
  };


  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className='App useContext'>
          <div className='login-container'>
            {state.isLoggedIn ? (
              <>
                <h2>Welcome {state.username}!</h2>
                <button onClick={() => dispatch({ type: 'logOut' })}>
                  Log Out
                </button>          

              </>
            ) : (
              <form className='form' onSubmit={onSubmit}> {/* HERE THE onSubmit is set up !!*/ }
                {state.error && <p className='error'>{state.error}</p>}
                <p>Please Login!</p>
                <input
                  type='text'
                  placeholder='username'
                  value={state.draftUsername}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'draftUsername',
                      payload: e.currentTarget.value,
                    })
                  }
                />
                <input
                  type='password'
                  placeholder='password'
                  autoComplete='new-password'
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'password',
                      payload: e.currentTarget.value,
                    })
                  }
                />
                <button className='submit' type='submit' disabled={state.isLoading}>
                  {state.isLoading ? 'Logging in...' : 'Log In'}
                </button>
              </form>
            )}
          </div>


        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}