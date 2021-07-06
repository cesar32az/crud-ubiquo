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

  async deleteHeroe(id) {
    try {
      const response = await axios.delete(`${API_URL}/heroes/${id}`);
      const message = response.data.message;
      return message;
    } catch (error) {
      console.log(error);
    }
  }

  async createHeroe(heroe) {
    try {
      const response = await axios.post(`${API_URL}/heroes`, heroe);
      const message = response.data.message;
      return message;
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

  async getInfoHeroes() {
    try {
      const alignment = JSON.parse(localStorage.getItem('alignment'));
      const publisher = JSON.parse(localStorage.getItem('publisher'));
      const gender = JSON.parse(localStorage.getItem('gender'));
      if (!alignment || !publisher || !gender) {
        const alignmentResponse = await axios.get(`${API_URL}/alignment`);
        const alignment = alignmentResponse.data.alignment;
        const publisherResponse = await axios.get(`${API_URL}/publisher`);
        const publisher = publisherResponse.data.publisher;
        const genderResponse = await axios.get(`${API_URL}/gender`);
        const gender = genderResponse.data.gender;
        localStorage.setItem('alignment', JSON.stringify(alignment));
        localStorage.setItem('gender', JSON.stringify(gender));
        localStorage.setItem('publisher', JSON.stringify(publisher));
        return { alignment, gender, publisher };
      }

      return { alignment, gender, publisher };
    } catch (error) {
      console.log(error);
    }
  }
}
export default new HeroeService();
