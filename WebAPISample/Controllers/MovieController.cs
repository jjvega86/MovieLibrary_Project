using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            var movies = _context.Movies.ToList();
            return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            var movie = _context.Movies.Where(c => c.MovieId == id).SingleOrDefault();
            return Ok(movie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic

            Movie movie = new Movie();
            value.Title = movie.Title;
            value.Director = movie.Director;
            value.Genre = movie.Genre;

            _context.Movies.Add(movie);
            _context.SaveChanges();
            return Ok();
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            var movieToUpdate = _context.Movies.Where(c => c.MovieId == movie.MovieId).SingleOrDefault();
            movieToUpdate.Title = movie.Title;
            movieToUpdate.Director = movie.Director;
            movieToUpdate.Genre = movie.Genre;

            _context.Movies.Update(movieToUpdate);
            _context.SaveChanges();
            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            _context.Movies.Where(c => c.MovieId == id).SingleOrDefault();
            _context.Remove(id);
            _context.SaveChanges();
            return Ok();
        }
    }
}