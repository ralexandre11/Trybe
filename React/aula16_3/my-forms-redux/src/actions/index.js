
export const updateForm = (user) => ({ 
  type: 'ADD_USER', 
  user: { 
    name: user.name, 
    email: user.email,
    // cpf, 
    // address, 
    // city, 
    // countryState, 
    // resume, 
    // role,
    // roleDescription 
  }
});

// export const updateForm = (name, email, cpf, address, city, countryState, resume, role, roleDescription) => ({ 
