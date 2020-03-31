/**
 * Seorang anak bernama Jansen sedang membaca artikel tentang Generasi Manusia. Setelah membaca artikel, 
 * Jansen mengetahui bahwa setiap generasi ditentukan dari tahun kelahiran dan tahun itu memiliki range yang 
 * berbeda-beda, seperti berikut:
 *   -Generasi Baby Boomer, orang yang lahir pada tahun 1946 hingga 1964
 *   -Generasi X, orang yang lahir pada tahun 1965 hingga 1980
 *   -Generasi Y (Milenial), orang yang lahir pada tahun 1981 hingga 1994
 *   -Generasi Z, orang yang lahir pada tahun 1995 hingga 2010
 *   -Generasi Alpha, orang yang lahir pada tahun 2011 hingga 2024
 * 
 * Saat ini Jansen berumur 12 tahun. kesimpulan yang Jansen dapat setelah membaca
 * artikel tersebut ialah "Jansen merupakan Generasi Z"
 * 
 * Buatlah Pseudocode untuk program diatas 
 */

/**
 * Pseudocode :
 * SET 'tahunSekarang' as integer
 * SET 'tahunLahir' as integer
 * SET 'umur' as integer
 * SET 'nama' as string
 * SET 'hasil' as string
 * READ 'tahunSekarang'
 * READ 'umur'
 * READ 'nama'
 * COMPUTE 'tahunLahir' with 'tahunSekarang' substract 'umur'
 * IF 'tahunLahir' >= 1946 AND 'tahunLahir' <= 1964
 *  SET 'hasil' = '{nama} merupakan Generasi Baby Boomer'
 *  ELSE IF 'tahunLahir' >= 1965 AND 'tahunLahir' <= 1980
 *      SET 'hasil' = '{nama} merupakan Generasi X'
 *      ELSE IF 'tahunLahir' >= 1981 AND 'tahunLahir' <= 1994
 *          SET 'hasil' = '{nama} merupakan Generasi Y (Milenial)'
 *          ELSE IF 'tahunLahir' >= 1995 AND 'tahunLahir' <= 2010
 *              SET 'hasil' = '{nama} merupakan generasi Z'
 *              ELSE IF 'tahunLahir' >= 2011 AND 'tahunLahir' <=2024
 *                  SET 'hasil' = '{nama} merupakan Generasi ALpha'
 * ENDIF
 * PRINT 'hasil'
*/
