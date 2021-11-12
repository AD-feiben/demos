import { mock } from "mockjs"
const users = mock({
  'list|10': [{
      'id': '@natural',
      'name': '@cname',
      'assets': '@float(99999, -99999, 0, 2)'
  }],
  total: 10
});

const getUserInfoById = (id, key) => {
  const res = users.list.find(user => {
    return user.id === +id;
  });
  if (!res) return;
  return key ? res[key] : res;
}

export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: users,
      }
    },
  },
  {
    url: '/api/user/:id',
    method: 'get',
    response: ({ query }) => {
      const id = query.id;
      if (!id) {
        return {
          code: 1,
          message: 'Illegal Parameter'
        };
      }
      return {
        code: 0,
        message: 'ok',
        data: getUserInfoById(id)
      }
    }
  },
  {
    url: '/api/user/assets/:id',
    method: 'get',
    response: ({ query }) => {
      const id = query.id;
      if (!id) {
        return {
          code: 1,
          message: 'Illegal Parameter'
        };
      }
      return {
        code: 0,
        message: 'ok',
        data: getUserInfoById(id, 'assets')
      }
    }
  }
]
