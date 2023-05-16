import withSession from '../lib/';

export default withSession(async (req, res) => {
  const { username, password } = await req.body;
  
  if (username === 'mani' && password === '123') {
    req.session.set('user', { username });
    await req.session.save();
    return res.status(200).json({ message: 'Logged in successfully' });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});
