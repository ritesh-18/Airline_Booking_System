const { Logger } = require("../config/index");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const response = await this.model.create(data);
      Logger.info("Data created successfully");
      return response;
    } catch (error) {
      Logger.error(
        "something went wrong while creating a data in CrudRepo: create"
      );
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.destroy({
        where: {
          id: id,
        },
      });
      Logger.info("Data destroyed successfully");
      return response;
    } catch (error) {
      Logger.error(
        "something went wrong while deleteing a data in CrudRepo: destroy"
      );
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      Logger.info("Data fetched successfully");
      return response;
    } catch (error) {
      Logger.error(
        "something went wrong while fetching a data in CrudRepo: get"
      );
      throw error;
    }
  }
  async getAll(id) {
    try {
      const response = await this.model.findAll();
      Logger.info("Data fetched successfully");
      return response;
    } catch (error) {
      Logger.error("something went wrong in CrudRepo: getAll");
      throw error;
    }
  }
    async update(data , id) {
    try {
      const response = await this.model.update(data , {where:{id:id}});
      Logger.info("Data updated successfully");
      return response;
    } catch (error) {
      Logger.error("something went wrong in CrudRepo: update");
      throw error;
    }
  }



  }
  
module.exports=CrudRepository
