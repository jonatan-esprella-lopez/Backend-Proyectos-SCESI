import { Request, Response } from 'express';

const healthy = (_req: Request, res: Response) => {
    try {
        res.status(200).json({
            healt: 'healthy',
            status: '200',
            message: 'ok',
        });
    } catch (error) {
        console.error('Error in health check:', error);
        res.status(500).json({
            status: '500',
            message: 'Internal Server Error',
        });
    }

};

module.exports = {
    healthy
};