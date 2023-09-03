const create = async (req, res) => {
   res.send('Blog Created successfully');
};

const read = async (req, res) => {
   res.send('Blog Read successfull');
};

const deleted = async (req, res) => {
   res.send('Blog Deleted successfully');
};

const update = async (req, res) => {
   res.send('Blog Update successfull');
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
