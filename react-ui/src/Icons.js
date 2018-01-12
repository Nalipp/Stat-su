import React from 'react';
import PropTypes from 'prop-types';

const sgvStyle = {
  display: 'inline-block',
  fill: 'white',
  cursor: 'pointer',
}

const icons = {
  play: 'M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416zM384 288l384 224-384 224z',
  pause: 'M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416zM320 320h128v384h-128zM576 320h128v384h-128z',
  stop: 'M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416zM320 320h384v384h-384z',
  archive: 'M895.403 725.333c0-4.48-0.171-9.003-1.621-13.483l-85.333-256c-5.803-17.451-22.016-29.184-40.448-29.184h-23.936l29.099-28.928c49.92-49.92 49.92-131.072 0-180.992-34.56-34.645-88.235-45.995-133.163-30.251v-58.496c0-70.571-57.429-128-128-128s-128 57.429-128 128v58.496c-44.885-15.744-98.603-4.395-133.163 30.251-49.92 49.92-49.92 131.072 0.085 181.077l29.013 28.843h-23.936c-18.432 0-34.645 11.733-40.448 29.184l-85.333 256c-1.451 4.48-1.621 9.003-1.621 13.483-0.597 0-0.597 213.333-0.597 213.333 0 23.595 19.072 42.667 42.667 42.667h682.667c23.595 0 42.667-19.072 42.667-42.667 0 0 0-213.333-0.597-213.333zM311.168 277.077c8.064-7.979 18.731-12.501 30.165-12.501s22.101 4.437 30.165 12.501l97.835 97.835v-246.912c0-23.552 19.115-42.667 42.667-42.667s42.667 19.115 42.667 42.667v246.912l97.835-97.835c16.171-16.085 44.16-16.085 60.331 0 16.683 16.64 16.683 43.648 0.085 60.245l-200.917 199.851-200.832-199.765c-16.683-16.555-16.683-43.691 0-60.331zM286.763 512h79.019l146.304 145.493 146.261-145.493h79.019l71.125 213.333h-592.811l71.083-213.333zM810.667 896h-597.333v-128h597.333v128z',
  trash: 'M959.36 218.208c-3.072-50.24-44.384-90.112-95.36-90.112h-96v-32-0.064c0-53.024-43.008-96-96-96h-320c-53.024 0-96 42.976-96 96v0.032 32l-96-0c-51.040 0-92.32 39.872-95.392 90.112l-0.608 0v37.856 32c0 35.328 28.672 64 64 64v0 544c0 70.688 57.312 128 128 128h512c70.688 0 128-57.312 128-128v-544c35.328 0 64-28.672 64-64v-32-37.824h-0.64zM320 96.064c0-17.696 14.304-32 32-32h320c17.696 0 32 14.304 32 32v32h-384v-32zM832 896.064c0 35.264-28.736 64-64 64h-512c-35.296 0-64-28.736-64-64v-544h640v544zM896 256.032v32h-768v-32-31.968c0-17.696 14.304-32 32-32h704c17.696 0 32 14.304 32 32v31.968zM288 896.192h64c17.696 0 32-14.304 32-32v-416c0-17.696-14.304-32-32-32h-64c-17.696 0-32 14.304-32 32v416c0 17.696 14.304 32 32 32zM288 448.16h64v416l-64-0v-416zM480 896.192h64c17.696 0 32-14.304 32-32v-416c0-17.696-14.304-32-32-32h-64c-17.696 0-32 14.304-32 32v416c0 17.696 14.304 32 32 32zM480 448.16h64v416h-64v-416zM672 896.192h64c17.696 0 32-14.304 32-32v-416c0-17.696-14.304-32-32-32h-64c-17.696 0-32 14.304-32 32v416c0 17.696 14.304 32 32 32zM672 448.16h64v416h-64v-416z',
  restore: 'M810.411 306.645c0.171-2.645 0.256-5.333 0.256-7.979 0-34.176-13.312-66.347-37.504-90.496-24.149-24.192-56.32-37.504-90.496-37.504s-66.347 13.312-90.496 37.504l-123.392 123.349c-22.613-20.181-52.096-32.853-84.779-32.853h-42.667c-164.651 0-298.667 133.973-298.667 298.667 0 141.056 91.307 259.584 213.589 290.688-0.171 2.645-0.256 5.333-0.256 7.979 0 34.176 13.312 66.347 37.504 90.496 24.149 24.192 56.32 37.504 90.496 37.504s66.347-13.312 90.496-37.504l123.392-123.349c22.613 20.181 52.096 32.853 84.779 32.853h42.667c164.651 0 298.667-133.973 298.667-298.667 0-141.056-91.307-259.584-213.589-290.688zM725.333 810.667h-42.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h42.667c70.571 0 128-57.429 128-128s-47.829-128-106.667-128h-89.003l55.168 55.168c16.683 16.683 16.683 43.648 0 60.331-8.32 8.32-19.243 12.501-30.165 12.501s-21.845-4.181-30.165-12.501l-158.165-158.165 158.165-158.165c8.32-8.32 19.243-12.501 30.165-12.501s21.845 4.181 30.165 12.501c16.683 16.683 16.683 43.648 0 60.331l-55.168 55.168h89.003c105.856 0 192 95.701 192 213.333s-95.701 213.333-213.333 213.333zM757.291 513.237c29.867 6.997 53.376 42.667 53.376 84.096 0 47.061-38.272 85.333-85.333 85.333h-42.667c-36.565 0-67.584 23.211-79.701 55.637-0.469-0.469-158.635-158.635-158.635-158.635-16.128-16.128-37.547-25.003-60.331-25.003s-44.203 8.875-60.331 25.003-25.003 37.547-25.003 60.331c0 14.72 3.712 28.885 10.709 41.429-29.867-6.997-53.376-42.667-53.376-84.096 0-47.061 38.272-85.333 85.333-85.333h42.667c36.565 0 67.584-23.211 79.701-55.637 0.469 0.469 158.635 158.635 158.635 158.635 16.128 16.128 37.547 25.003 60.331 25.003s44.203-8.875 60.331-25.003 25.003-37.547 25.003-60.331c0-14.72-3.712-28.885-10.709-41.429zM426.667 426.667c0 23.552-19.072 42.667-42.667 42.667h-42.667c-70.571 0-128 57.429-128 128s47.829 128 106.667 128h89.003l-55.168-55.168c-16.683-16.683-16.683-43.648 0-60.331 8.32-8.32 19.243-12.501 30.165-12.501s21.845 4.181 30.165 12.501l158.165 158.165-158.165 158.165c-8.32 8.32-19.243 12.501-30.165 12.501s-21.845-4.181-30.165-12.501c-16.683-16.683-16.683-43.648 0-60.331l55.168-55.168h-89.003c-105.856 0-192-95.701-192-213.333s95.701-213.333 213.333-213.333h42.667c23.595 0 42.667 19.115 42.667 42.667z',
  hamburger: 'M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z',
  link: 'M352 256l160 160-192 192 96 96 192-192 160 160v-416z',
  close: 'M810.667 896h-426.667c-61.269 0-134.187-37.547-169.685-87.296l-111.744-156.459c-26.837-37.589-49.365-69.163-50.688-70.869-10.496-14.677-10.624-38.144-0.341-52.949 0.768-1.067 23.936-33.408 51.371-71.936l111.275-155.861c35.627-49.792 108.629-87.296 169.813-87.296h426.667c70.571 0 128 57.429 128 128v426.667c0 70.571-57.429 128-128 128zM137.771 554.624c9.173 12.757 21.248 29.696 34.389 48l111.701 156.459c19.243 27.008 66.987 51.584 100.181 51.584h426.667c23.552 0 42.667-19.2 42.667-42.709v-426.624c0-23.509-19.115-42.667-42.667-42.667h-426.667c-33.109 0-80.939 24.576-100.309 51.584l-111.275 155.819c-13.312 18.603-25.557 35.755-34.688 48.555z',
  edit: 'M896 293.504l-165.504-165.504c-12.501-12.501-28.928-18.731-45.269-18.731-16.384 0-32.725 6.229-45.227 18.731l-466.731 466.731c-12.501 12.501-23.808 31.019-32 50.688-8.192 19.755-13.269 40.917-13.269 58.581v192h192c17.664 0 38.741-5.077 58.496-13.269 19.755-8.192 38.229-19.499 50.731-32l466.773-466.731c12.501-12.501 18.731-28.928 18.731-45.269 0-16.384-6.229-32.725-18.731-45.227zM246.101 642.603l353.835-353.835 52.565 52.565-353.835 353.835-52.565-52.565zM320 810.667h-64l-42.667-42.667v-64c0-3.285 1.408-13.013 6.741-25.813 0.427-0.853 126.592 125.355 126.592 125.355-13.739 5.717-23.381 7.125-26.667 7.125zM381.397 777.899l-52.565-52.565 353.835-353.835 52.565 52.565-353.835 353.835zM765.397 393.899l-135.339-135.339 55.168-55.168 135.253 135.339-55.083 55.168z',
};

const customSize = {
  small: '16',
  normal: '22',
  large: '28',
  jumbo: '150',
}

const Icons = props => (
  <svg style={sgvStyle} width={customSize[props.size]} height={customSize[props.size]} viewBox="0 0 1024 1024">
    <path d={icons[props.icon]}></path>
  </svg>
);

Icons.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Icons;