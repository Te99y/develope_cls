import computeMetrics from './metrics';

console.log('Running test_metrics.ts');
computeMetrics('https://www.example.com', 'cloned_repos/expressjs express.git').then((result) => {
    console.log('Metrics computed:');
    console.log(result);
}).catch((error: unknown) => {
    console.error('Error computing metrics:');
    console.error(error);
});