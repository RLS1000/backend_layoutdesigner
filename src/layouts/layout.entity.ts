import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Layout {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    orderId: string;

    @Column({ nullable: true })
    customerEmail: string;

    @Column({ type: 'jsonb', nullable: true })
    layoutData: object;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    exportedAt: Date;

    @Column({ nullable: true })
    deepLink: string;
}
