using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPISample.Migrations
{
    public partial class GetDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "MovieId", "Director", "Genre", "Image", "Title" },
                values: new object[,]
                {
                    { 1, "Martin Scorsese", "Drama", null, "The Departed" },
                    { 2, "Christopher Nolan", "Drama", null, "The Dark Knight" },
                    { 3, "Christopher Nolan", "Drama", null, "Inception" },
                    { 4, "David Gordon Green", "Comedy", null, "Pineapple Express" },
                    { 5, "John McTiernan", "Action", null, "Die Hard" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 5);
        }
    }
}
