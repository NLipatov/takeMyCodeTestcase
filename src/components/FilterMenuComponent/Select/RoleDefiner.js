const useRoleDefiner = (musiciansList) => {
    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
      }
    const rolesList = [];
    musiciansList.map((i) => {
        if(rolesList.filter(x=>x === i.role).length === 0){
            rolesList.push(i.role);
        }
    })
    return rolesList;
}

export default useRoleDefiner;