import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Home from './Home';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('Route', () => {
  it('should show Home component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialEntries={['/']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  })

  it('should show Creatures component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialEntries={['/unicorns']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Creatures)).toHaveLength(1);
  })

  it('should show Creatures component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialEntries={['/puppies']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Creatures)).toHaveLength(1);
  })

  it('should show Creatures component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialEntries={['/sharks']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Creatures)).toHaveLength(1);
  })

  it('should show CreatureDetails component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialEntries={['/unicorns/1']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(CreatureDetails)).toHaveLength(1);
  })
})