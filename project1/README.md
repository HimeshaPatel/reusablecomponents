

# himesha-countries

A React package to fetch and display country details.

## Installation

```bash
npm install himesha-countries
```

## Usage

```jsx
import { CountryList, getCountryByCode } from 'himesha-countries';

// Example using CountryList component
function App() {
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' }
  ];

  return (
    <div>
      <h1>Countries</h1>
      <CountryList countries={countries} />
    </div>
  );
}

// Example using getCountryByCode utility
const country = getCountryByCode(countries, 'US');
console.log(country); // { code: 'US', name: 'United States' }
```

## API

### Components

#### `<CountryList />`

A component that renders a list of countries.

Props:
- `countries` (Array): An array of country objects with the following structure:
  - `code` (String): The country code
  - `name` (String): The country name

### Utility Functions

#### `getCountryByCode(countries, code)`

Returns a country object matching the provided country code.

Parameters:
- `countries` (Array): Array of country objects
- `code` (String): Country code to search for

Returns:
- (Object): The matching country object or undefined if not found

## Development

1. Clone the repository:
```bash
git clone https://github.com/HimeshaPatel/himesha-countries.git
```

2. Install dependencies:
```bash
npm install
```

3. Build the package:
```bash
npm run build
```

4. Development with watch mode:
```bash
npm run dev
```

## Scripts

- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run dev` - Development build with watch mode

## License

ISC

## Author

Himesha Patel

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you find this package helpful, please consider:
- Starring the GitHub repo
- Creating pull requests for any improvements
- Reporting issues if you find any bugs

## Keywords

- react
- countries
- hooks
- npm