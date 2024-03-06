import request from "supertest";
import express from "express";
import router from "../src/routes/authorRouter";



const app = express();
app.use(express.json());
app.use("/users", router);

describe("Author Routes", () => {
  let authorId: string;

  it("should add a new author", async () => {
    const newAuthorData = {
      fullName: "John Doe",
      email: "john@example.com",
      password: "password123",
      confirmPassword: "password123",
    };

    const response = await request(app)
      .post("/users/addAuthor")
      .send(newAuthorData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("createNewAuthor");
    expect(response.body.createNewAuthor).toHaveProperty("id");
    //authorId = response.body.createNewAuthor.id;
  });

  it("should get all authors", async () => {
    const response = await request(app).get("/users/allAuthors");
    expect(response.status).toBe(200);
    // Add more assertions as needed
  });

  it("should get a specific author by ID", async () => {
    if (!authorId) {
      throw new Error("Author ID not set");
    }

    const response = await request(app).get(`/users/getAuthorById/${authorId}`);
    expect(response.status).toBe(200);
    // Add more assertions as needed
  });

  it("should update an author", async () => {
    if (!authorId) {
      throw new Error("Author ID not set");
    }

    const updatedAuthorData = {
      fullName: "Updated Name",
    };

    const response = await request(app)
      .put(`/users/updateAuthor/${authorId}`)
      .send(updatedAuthorData);

    expect(response.status).toBe(200);
  });

  it("should delete an author", async () => {
    if (!authorId) {
      throw new Error("Author ID not set");
    }

    const response = await request(app).delete(
      `/users/deleteAuthor/${authorId}`
    );
    expect(response.status).toBe(200);
  });
});
