import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export class HeroeService {
  async getAllHeroes() {
    try {
      const response = await axios.get(`${API_URL}/heroes`);
      const heroes = response.data.heroes;
      return heroes;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneHeroe() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async createHeroe() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async updateHeroe() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  deleteHeroe() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}
export default new HeroeService();
